export default `#graphql
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type Post {
    id: ID!
    title: String
    body: String
    author: Author
    comments: [Comment]
  }

  type PostConnection {
    data: [Post]
    info: ConnectionInfo
  }

  type ConnectionInfo {
    page: Int!
    total: Int
    pages: Int
  }

  type Comment {
    id: ID!
    name: String
    email: String
    body: String
  }

  type Author {
    id: ID!
    name: String
    username: String
    email: String
    address: Address
  }

  type Address {
    street: String
    suite: String
    city: City
    zipcode: String
  }

  enum City {
    LVIV
    KYIV
    DNIPRO
  }

  type Query {
    posts: [Post]
    postById(id: ID!): Post
    postsPaginated(page: Int = 1, pageSize: Int = 5): PostConnection!
    comments: [Comment]
    authors: [Author]
    authorsByCity(city: City!): [Author]
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean
    createComment(postId: ID!, input: CreateCommentInput!): Comment
    updateComment(id: ID!, input: UpdateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
  }

  type Subscription {
    postDeleted: Post
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  input CreateCommentInput {
    name: String!
    email: String!
    body: String!
  }

  input UpdateCommentInput {
    name: String
    email: String
    body: String
  }
`;
