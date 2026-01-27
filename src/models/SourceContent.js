export default function SourceContent(id, data) {
    id = id ?? '';
    data = data ?? {};

    return {
        id: id,
        game: data.game,
        sourcebookCode: data.sourcebookCode,
        sourcebookTitle: data.sourcebookTitle,
        races: data.races,
        classes: data.classes,
        backgrounds: data.backgrounds,
        feats: data.feats
    }
}
