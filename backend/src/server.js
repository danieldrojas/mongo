import express from 'express';
import bodyParser, { urlencoded } from 'body-parser'
import { MongoClient } from 'mongodb'

const app = express();
app.use(bodyParser.json())
app.use(urlencoded({
    extended: true
}))

app.get('/api/articles/:name', async (req, res) => {

    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true, });
        const db = client.db('test-data');
        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo)
        client.close();
    } catch (error) {
        res.status(500).json({ message: "Error connecting", error });
    };     

})

app.listen(8000, () => console.log('Listening on port 8000'))