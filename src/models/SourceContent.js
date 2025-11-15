export default function SourceContent(id, data) {
    id = id ?? '',
    data = data ?? {}

    return {
        id: id,
        game: data.game,
        races: data.races,
        classes: data.classes,
        backgrounds: data.backgrounds 
    }
}