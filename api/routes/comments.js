const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /comments'
    });
});

router.post('/', (req, res, next) => {
    const comment = {
        postId: req.body.postId,
        name: req.body.name,
        email: req.body.email,
        body: req.body.body
    };
    res.status(201).json({
        message: 'Handling POST requests to /comments',
        createdComment: comment
    });
});

// Handle incoming GET requests to /comments 
router.get('/:commentId', (req, res, next) => {
    const id = req.params.commentId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:commentId', (req, res, next) => {
        res.status(200).json({
        message: 'Updated comment!',
            
        });
});

router.delete('/:commentId', (req, res, next) => {
    res.status(200).json({
    message: 'Deleted comment!',
        
    });
});

module.exports = router;
