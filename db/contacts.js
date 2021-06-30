import { nanoid } from "nanoid";

export async function getContacts(db, from = new Date(), by, limit) {
  return db
    .collection("contacts")
    .find({
      ...(from && {
        createdAt: {
          $lte: from,
        },
      }),
      ...(by && { creatorId: by }),
    })
    .sort({ createdAt: -1 })
    .limit(limit || 10)
    .toArray();
}

export async function insertContact(db, { name, phone, creatorId }) {
  return db
    .collection("contacts")
    .insertOne({
      _id: nanoid(12),
      name,
      phone,
      creatorId,
      createdAt: new Date(),
    })
    .then(({ ops }) => ops[0]);
}
