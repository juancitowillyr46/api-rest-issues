const Issue = require('../models/issue.model');

exports.read = (req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
}

exports.getId = (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
}

exports.post = (req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({ 'issue': 'Added successfully' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new Record');
        });
}

exports.put = (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue) {
            return next(new Error('Could not load Document'));
        } else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json({ 'issue': 'Update done' });
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
}

exports.delete = (req, res) => {
    Issue.findByIdAndDelete(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json('Removed successfully');
    });
}