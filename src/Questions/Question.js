const questions = [
    {
        _id: 1,
        question: 'Which of the following is an advantage of using JavaScript?',
        response: [
            {
                _id: 1,
                response: 'Less server interaction',
                status: false
            },
            {
                _id: 2,
                response: 'Immediate feedback to the visitors',
                status: false
            },
            {
                _id: 3,
                response: 'Increased interactivity',
                status: false
            },
            {
                _id: 4,
                response: 'All of the above.',
                status: true
            }
        ]
    },
    {
        _id: 2,
        question: 'Which of the following is the correct syntax to redirect a url using JavaScript?',
        response: [
            {
                _id: 1,
                response: "document.location='http://www.newlocation.com';",
                status: false
            },
            {
                _id: 2,
                response: "browser.location='http://www.newlocation.com';",
                status: false
            },
            {
                _id: 3,
                response: "navigator.location='http://www.newlocation.com';",
                status: false
            },
            {
                _id: 4,
                response: "window.location='http://www.newlocation.com';",
                status: true
            }
        ]
    },
    {
        _id: 3,
        question: 'Which built-in method removes the last element from an array and returns that element?',
        response: [
            {
                _id: 1,
                response: "last()",
                status: false
            },
            {
                _id: 2,
                response: "get()",
                status: false
            },
            {
                _id: 3,
                response: "pop()",
                status: true
            },
            {
                _id: 4,
                response: "None of the above.",
                status: false
            }
        ]
    },
]
export default questions