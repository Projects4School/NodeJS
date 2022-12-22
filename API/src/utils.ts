/**
 * Function for load file and use "default" export
 * @param name File path
 * @returns {Promise<any>} Promise
 */
export async function loadComponent(name: string): Promise<any> {
    const module = await import(name);
    return module.default;
}