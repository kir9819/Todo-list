// import { ObjectID } from "../../../../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

// import { ObjectId } from "../../../../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson";

// let express = require('express');
// let app = express();


// app.get('/', (req, res) => {
//     res.send('index');
// })

// app.listen(3000, () => {
//     console.log('ok');
// })

module.exports = (app, db, todos) => {
    
    app.get('/', (req, res) => {
        let collection = db.collection("todos");
        let self = res;
        try {
            collection.find({}).toArray((err, res) => { // finding todo in db
                                                        // and show todos
                todos = res;
                if (todos != null) {
                    return self.render('index', { todos: todos });
                }
                else return self.render('index');
            })
        }
        catch (err) {
            console.log("didn't get todos");
            return self.render('index');
        }
        
        // res.render('index');
        
    })

    app.post('/addtask', (req, res) => {
        let collection = db.collection('todos');
        let file = { name: req.body.name, check: "", info: req.body.info };
        try {
            collection.insertOne(file);
        }
        catch (err) {
            console.error("don't save in db");
            console.log(err);
        }
        res.redirect('/');
    })
    app.post('/changecheck', (req, res) => {
        let ObjectID = require('mongodb').ObjectId;
        let collection = db.collection('todos');
        let selfres = res;
        let ch = req.body.check;
        try {
            collection.findOneAndUpdate(
                {_id: ObjectID(req.body.id)},
                {$set: {check: ch}},
                {returnOriginal: false},
                (err, res) => {
                    // console.log(res);
                    if(err) throw err;
                    // selfres.redirect('/');
                }
            )
        }
        catch (err) {
            console.error("don't update check in db");
            console.log(err);
            // selfres.redirect('/');
        }
        res.redirect('/');
    })
    app.post('/delete', (req, res) => {
        self = res;
        let ObjectID = require('mongodb').ObjectId;
        let collection = db.collection('todos');
        try {
            collection.remove(
                {_id: ObjectID(req.body.id)},
                (err, res) => {
                    if(err) throw err;
                    return self.redirect('/');
                }
            )
            // return self.redirect('/');
        }
        catch (err) {
            console.error("didn't delete");
            console.log(err);
            // return self.redirect('/');
        }
        
    })
}

// const noteRoutes = require('./note_routes');
//  module.exports = function(app, db) {
//   app.post('/notes', (req, res) => {
//     const note = { text: req.body.body, title: req.body.title };
//     db.collection('notes').insert(note, (err, result) => {
//       if (err) { 
//         res.send({ 'error': 'An error has occurred' }); 
//       } else {
//         res.send(result.ops[0]);
//       }
//     });
//   });

//   app.get('/notes/:id', (req, res) => {
//     const id = req.params.id;
//     const details = { '_id': new ObjectID(id) };
//     db.collection('notes').findOne(details, (err, item) => {
//       if (err) {
//         res.send({'error':'An error has occurred'});
//       } else {
//         res.send(item);
//       } 
//     });
//   });

// };
