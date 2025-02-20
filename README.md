# Unexpected Regex Behavior in MongoDB Query

This repository demonstrates a bug encountered while using regular expressions in MongoDB queries with Node.js. The query is intended to perform a case-insensitive search, but it returns unexpected results.

## Bug Description

The provided JavaScript code attempts to query a MongoDB collection using a regular expression for case-insensitive matching. However, the query does not behave as expected, potentially due to incorrect regex compilation or other underlying issues. The bug is demonstrated in `bug.js`, and a potential solution is provided in `bugSolution.js`

## How to Reproduce

1.  Clone this repository.
2.  Ensure you have Node.js and MongoDB installed and running.
3.  Update `uri` in `bug.js` with your MongoDB connection string.
4.  Run `node bug.js`.
5.  Observe that the output does not reflect the expected case-insensitive match.

## Solution

A possible solution to this issue is provided in `bugSolution.js`. This solution addresses the potential compilation issue of the regex.  Consult the MongoDB documentation for further details on using regular expressions in queries.
