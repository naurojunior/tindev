module.exports = {
    store(req, rest) {
        return rest.json({ ok: true});
    }
};