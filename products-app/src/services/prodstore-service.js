export default class ProdstoreService {

    getProds() {
        return [
                {
                    id: 1,
                    imageUrl: "some url here",
                    name: "Product-1",
                    count: 4,
                    size: {
                        "width": 200,
                        "height": 200
                    },
                    weight: "200g",
                    comments: ["CommentModel", "CommentModel"]
                },
                {
                    id: 2,
                    imageUrl: "some url here2",
                    name: "Product-2",
                    count: 6,
                    size: {
                        "width": 400,
                        "height": 400
                    },
                    weight: "400g",
                    comments: ["CommentModel", "CommentModel"]
                },
                {
                    id: 3,
                    imageUrl: "some url here3",
                    name: "Product-3",
                    count: 0,
                    size: {
                        "width": 100,
                        "height": 400
                    },
                    weight: "400g",
                    comments: ["CommentModel", "CommentModel"]
                },
            ];
    }
}

// const prods = [
//     {
//         id: 1,
//         imageUrl: "some url here",
//         name: "Product name",
//         count: 4,
//         size: {
//             "width": 200,
//             "height": 200
//         },
//         weight: "200g",
//         comments: ["CommentModel", "CommentModel"]
//     },
//     {
//         id: 2,
//         imageUrl: "some url here2",
//         name: "Product name2",
//         count: 6,
//         size: {
//             "width": 400,
//             "height": 400
//         },
//         weight: "400g",
//         comments: ["CommentModel", "CommentModel"]
//     },
// ]