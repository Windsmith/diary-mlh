export async function load({params, parent}) {
    let { entries } = await parent();
    let specificEntry = entries[params.slug];
    return {
        specificDate: specificEntry
    };
}