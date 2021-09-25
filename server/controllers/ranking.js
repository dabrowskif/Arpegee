import Character from '../models/character.js';

export const getRanking = async (req, res) => {
    console.log("Fetching ranking");
    const { page } = req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;

        const totalCharacters = await Character.countDocuments({});
        const characters = await Character.find().sort({level: -1}).limit(LIMIT).skip(startIndex);

        res.json({ data: characters, currentPage: Number(page), numberOfPages: Math.ceil(totalCharacters / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRankingByFilter = async (req, res) => {
    console.log("Fetching ranking by search");
    const { nickname, vocation, minlevel, maxlevel, page } = req.query;

    let ranking = null;
    let totalRankingCharacters = 0;

    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;
        const nicknameToLowerCase = new RegExp(nickname, 'i');

        // TODO probably it has better solution
        if (nickname === '' && vocation === 'all') {
            totalRankingCharacters = await Character.countDocuments(Character.find({ level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } }));
            ranking = await Character.find({ level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } }).sort({level: -1}).limit(LIMIT).skip(startIndex);
        } else if (nickname !== '' && vocation === 'all') {
            totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [ { nickname: nicknameToLowerCase }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } } ]}));
            ranking = await Character.find({ $and: [ { nickname: nicknameToLowerCase }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } } ]}).sort({level: -1}).limit(LIMIT).skip(startIndex);
        } else if (nickname === '' && vocation !== 'all') {
            totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [ { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } } ]}));
            ranking = await Character.find({ $and: [ { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } } ]}).sort({level: -1}).limit(LIMIT).skip(startIndex);
        } else if (nickname !== '' && vocation !== 'all') {
            totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [ { nickname: nicknameToLowerCase }, { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } }]}));
            ranking = await Character.find({ $and: [ { nickname: nicknameToLowerCase }, { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel)  + 1 } }]}).sort({level: -1}).limit(LIMIT).skip(startIndex);
        }

        res.json({ data: ranking, currentPage: Number(page), numberOfPages: Math.ceil(totalRankingCharacters / LIMIT)});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
