
export const steps = [
    {
        id: 'titleStep',
        title: '<h3>Title it!</h3>',
        text: "<p style='color:white;'>Add a title to your note here.</p>",

        attachTo: {
            element: '#titleArea',
            on: 'right'
        },
        highlightClass: 'tour-highlight',
        classes: 'tour-content',
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Next',
                type: 'next'
            }
        ]
    },
    {
        id: 'contentStep',
        title: '<h3>What is your message?<h3>',
        text: "<p style='color:white;'>Add a message to your note here.</p>",
        attachTo: {
            element: '#noteArea',
            on: 'right'
        },
        highlightClass: 'tour-highlight',
        classes: 'tour-content',
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Next',
                type: 'next'
            }
        ]
    },
    {
        id: 'postItStep',
        text: "<p style='color:white;'>Click \"Post It\" and watch it go on the board!</p>",
        attachTo: {
            element: '#postIt',
            on: 'right'
        },
        highlightClass: 'tour-highlight',
        classes: 'tour-content',
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Next',
                type: 'next'
            }
        ]
    },
    {
        title: '<h3>Update It!</h3>',
        id: 'updateStep',
        text: "<p style='color:white;'>Click the post-it body to update it's content.</p>",
        attachTo: {
            element: '.note-item',
            on: 'bottom'
        },
        highlightClass: 'tour-highlight',
        classes: 'tour-content',
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Next',
                type: 'next'
            }
        ]
    },
    {
        title: "<h3>Delete It!</h3>",
        id: 'deleteStep',
        text: "<p style='color:white;'>Did you make a mistake? No worries! Click the RED PIN to delete your post.</p>",
        attachTo: {
            element: '#deleteButton',
            on: 'bottom'
        },
        highlightClass: 'tour-highlight',
        classes: 'tour-content',
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Next',
                type: 'next'
            }
        ]
    }
]


export const tourOptions = {
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        scroll: true
    },
    useModalOverlay: true
};