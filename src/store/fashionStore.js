// store.js

import { defineStore } from 'pinia';

export const useTestStore = defineStore({
    id: "FashionPosts",
    state: () => ({
        posts: [
            {
                "id": 1,
                "title": "Category 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/736x/e3/86/ff/e386ff3058bb9e1b66f4e9c099e0f9a8.jpg"
            },
            {
                "id": 2,
                "title": "Category 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/736x/bb/c5/a9/bbc5a946ed500f669d04e3ee3d837228.jpg"
            },
            {
                "id": 3,
                "title": "Category 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/736x/53/ab/37/53ab37ab4cb746495de39c7f1e2ac338.jpg"
            },
            {
                "id": 4,
                "title": "Category 4",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/564x/9e/46/c5/9e46c55d67840d6876079186f6eae915.jpg"
            },
            {
                "id": 5,
                "title": "Category 5",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/736x/dd/e2/52/dde2528ce53d7af6772cc5c4abeb937c.jpg"
            },
            {
                "id": 6,
                "title": "Category 6",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/1200x/f6/f6/21/f6f621d25a81a1f48282892301858c7d.jpg"
            },
            {
                "id": 7,
                "title": "Category 7",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://cdn.shopify.com/s/files/1/0553/5996/3201/files/Teacher-Spring-2020-Capsule-Wardrobe-outfit-26.png?v=1652085086"
            }, {
                "id": 8,
                "title": "Category 8",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                "imageUrl": "https://i.pinimg.com/736x/e3/86/ff/e386ff3058bb9e1b66f4e9c099e0f9a8.jpg"
            }
        ]
    }),
    // getters: {
    //     getPosts: () => this.posts
    // },
    // actions: {
    //     async fetchTestData() {
    //         try {
    //             const testData = await import('');
    //             this.posts = testData;
    //         } catch (error) {
    //             console.error('Error fetching test data:', error);
    //         }
    //     }
    // }
});
