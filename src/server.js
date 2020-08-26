import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            poolSize: 10, bufferMaxEntries: 0, useNewUrlParser: true, useUnifiedTopology: true
        });
        const db = client.db('details');
        await operations(db);
        client.close();
    }
    catch (error) {
        res.status(500).send({ message: 'Error', error });
    }
}


const playersSelectionList = {
    'sanjay.bajjuri':
    {
        upvotes: 0,
        comments: []
    },
    'vinay.bajjuri':
    {
        upvotes: 0,
        comments: []
    },
    'suryansh.bajjuri':
    {
        upvotes: 0,
        comments: []
    },
}


app.get('/hello', (req, res) => res.send('Hello!'))

app.get('/hello/:name', (req, res) => res.send(`Hello! ${req.params.name}`));

app.post('/hello', (req, res) => res.send(`Hello! ${req.body.firstname + ' ' + req.body.middlename + ' ' + req.body.lastname} `));

app.post('/api/playerselection/:name/upvote', (req, res) => {
    const playerName = req.params.name;

    const playerNameArray = playersSelectionList[playerName];

    if (playerNameArray != null) {

        playersSelectionList[playerName].upvotes = playersSelectionList[playerName].upvotes + 1;

        res.status(200).send(`${playerName} has been selected ${playersSelectionList[playerName].upvotes} times !`);
    }

    res.status(200).send(`${playerName} is not available in the list to upvote`);
})

app.get('/api/getallplayers/:name', async (req, res) => {
    console.log('request recieved');
    withDB(async (db) => {
        const playerName = req.params.name;
        const playersSelectionList = await db.collection('playerslist').findOne({ name: playerName });
        res.status(200).send(playersSelectionList);
    }, res)
})


app.post('/api/playerlist/:name/upvote', async (req, res) => {
    console.log('request recieved');
    withDB(async (db) => {
        const playerName = req.params.name;

        const playersSelectionList = await db.collection('playerslist').findOne({ name: playerName });

        if (playersSelectionList != null) {

            await db.collection('playerslist').updateOne({ name: playerName },
                {
                    '$set':
                    {
                        upvotes: playersSelectionList.upvotes + 1
                    }
                });

            const latestPlayersSelectionData = await db.collection('playerslist').findOne({ name: playerName });

            res.status(200).send(latestPlayersSelectionData);

        }
    }, res)
});

app.post('/api/playerselection/:name/add-comment', (req, res) => {
    const playerName = req.params.name;
    const { username, text } = req.body;

    const playerNameArray = playersSelectionList[playerName];

    if (playerNameArray != null) {

        playersSelectionList[playerName].comments.push({ username, text });

        res.status(200).send(playersSelectionList[playerName]);
    }

    res.status(200).send(`${playerName} is not available in the list to upvote`);
})

app.post('/api/playerlist/:name/add-comment', (req, res) => {

    const playerName = req.params.name;
    const { username, text } = req.body;
    withDB(async (db) => {
        const playersSelectionList = await db.collection('playerslist').findOne({ name: playerName });

        await db.collection('playerslist').updateOne({ name: playerName },
            {
                '$set':
                {
                    comments: playersSelectionList.comments.concat(
                        {
                            username, text
                        }
                    )
                }
            });

        const latestPlayersSelectionData = await db.collection('playerslist').findOne({ name: playerName });

        res.status(200).send(latestPlayersSelectionData);
    }, res);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));