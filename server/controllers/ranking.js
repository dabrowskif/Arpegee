import Character from '../models/character.js';

export const getRanking = async (req, res) => {
  console.log('getRanking');
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;

    const totalCharacters = await Character.countDocuments({});
    const characters = await Character.find().sort({ level: -1 }).limit(LIMIT).skip(startIndex);

    res.json({ data: characters, currentPage: Number(page), numberOfPages: Math.ceil(totalCharacters / LIMIT) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRankingByFilter = async (req, res) => {
  console.log('getRankingByFilter');
  const {
    nickname, vocation, minlevel, maxlevel, page,
  } = req.query;

  let ranking = null;
  let totalRankingCharacters = 0;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const nicknameToLowerCase = new RegExp(nickname, 'i');

    // TODO probably it has better solution
    if (nickname === '' && vocation === 'all') {
      totalRankingCharacters = await Character.countDocuments(Character.find({ level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }));
      ranking = await Character.find({ level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }).sort({ level: -1 }).limit(LIMIT).skip(startIndex);
    } else if (nickname !== '' && vocation === 'all') {
      totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [{ nickname: nicknameToLowerCase }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }));
      ranking = await Character.find({ $and: [{ nickname: nicknameToLowerCase }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }).sort({ level: -1 }).limit(LIMIT).skip(startIndex);
    } else if (nickname === '' && vocation !== 'all') {
      totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [{ vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }));
      ranking = await Character.find({ $and: [{ vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }).sort({ level: -1 }).limit(LIMIT).skip(startIndex);
    } else if (nickname !== '' && vocation !== 'all') {
      totalRankingCharacters = await Character.countDocuments(Character.find({ $and: [{ nickname: nicknameToLowerCase }, { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }));
      ranking = await Character.find({ $and: [{ nickname: nicknameToLowerCase }, { vocation }, { level: { $gt: Number(minlevel) - 1, $lt: Number(maxlevel) + 1 } }] }).sort({ level: -1 }).limit(LIMIT).skip(startIndex);
    }

    res.json({ data: ranking, currentPage: Number(page), numberOfPages: Math.ceil(totalRankingCharacters / LIMIT) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRankingCharacter = async (req, res) => {
  const { id } = req.params;
  console.log(`getRankingCharacter with id ${id}`);

  try {
    const result = await Character.findById(id);

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
