import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	studentsMutations,
	studentsQueries,
	studentsTypeDef
} from './students/typeDefs';

import {
	coursesMutations,
	coursesQueries,
	coursesTypeDef
} from './courses/typeDefs';

import {
	gradesMutations,
	gradesQueries,
	gradesTypeDef
} from './grades/typeDefs';

import studentsResolvers from './students/resolvers';
import coursesResolvers from './courses/resolvers';
import gradesResolvers from './grades/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		studentsTypeDef,
		coursesTypeDef,
		gradesTypeDef
	],
	[
		studentsQueries,
		coursesQueries,
		gradesQueries
	],
	[
		studentsMutations,
		coursesMutations,
		gradesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		studentsResolvers
	)
});
