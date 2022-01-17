# Getting Started with Create React App
## Library Web App Project

For this project we use `Json-server` as a mock Api.\
To run the mock please type `yarn start:server`.\
Your Backend Mock API will run on [http://localhost:3002](http://localhost:3002)

### API Docs
Get Book List : GET [http://localhost:3002/books](http://localhost:3002/books) .\
Get Loan List : GET [http://localhost:3002/loanList](http://localhost:3002/loanList).\
Request Loan Book : PATCH [http://localhost:3002/books/:bookId](http://localhost:3002/books/:bookId)\
req body :
```
{
      "title": "Adobe Photoshop CS 99",
      "imageUrl": "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-2-CRC.png",
      "author": "John Doe",
      "year": "2020",
      "stock": "5",
      "rating": "5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "isLoan": true
}

```
update `isLoan` to `true`

OR

https://my-json-server.typicode.com/kharis-mitrais/react-training/books

### Run Project
`yarn start`

## Figma Design
[Libary App Design on Figma](https://www.figma.com/file/8v1UVufBhmrng6ms4ZFldf/Library-Web-App?node-id=1%3A2)
