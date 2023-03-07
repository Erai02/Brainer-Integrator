/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    "welcome": {
        text: 'Hi! Welcome to BrainerBot.',
        next: "questions"
    },
    "questions": {
        text: "What can I help you?",
        options: [
            {
                text: 'What is Brainer?',
                next: "what"
            },
            {
                text: 'Brainer Pricing',
                next: "pricing"
            },
            {
                text: 'Brainer Clients',
                next: "clients"
            }
        ]
    },
    "what": {
        text: 'Brainer is a warehouse management system, for more information about Brainer, you can visit the About page or contact us.',
        next: "more"
    },
    "more": {
        text: 'Any Question?',
        options: [
            {
                text: "<strong>Yes</strong>, I have!",
                next: "questions"
            },
            {
                text: "<strong>Nope</strong>, thanks.",
                next: "close"
            }
        ]
    },
    "clients": {
        text: 'you can visit the client page',
        next: "more"
    },
    "pricing": {
        text: 'You can contact our email for pricing',
        next: "more"
    },
    "close": {
        text: 'Thanks for using BrainerBot',
        next: 6
    },
    6: {
        text: 'You can click restart button for using us again'
        
    }
};