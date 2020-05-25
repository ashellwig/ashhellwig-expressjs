// --- Import Libraries ---
// Polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime.js'

import express from 'express'
import expressGraphQL from 'express-graphql'
import {
    buildSchema
} from 'graphql'

const schema = buildSchema(`
    type Query {
        message: String
    }
`)

const root = {
    message: () => 'Hello, world!'
}

const app = express()
app.use('/graphql', expressGraphQL({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log('GQL Server now running on :4000/graphql'))