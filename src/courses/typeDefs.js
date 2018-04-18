export const coursesTypeDef = `
type Course {
    id: Int!
    code: Int!
    name: String!
    credits: Int!
    teacher: String!
}

input CourseInput {
    code: Int!
    name: String!
    credits: Int!
    teacher:String!
}
`;

export const coursesQueries = `
    allCourses: [Course]!
    courseById(id: Int!): Course!
`;

export const coursesMutations = `
    createCourse(course: CourseInput!): Course!
    deleteCourse(id: Int!): Course!
    updateCourse(id: Int!, course: CourseInput!): Course!
`;
