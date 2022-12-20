export async function loadComponent(name: string) {
    const module = await import(name);
    return module.default;
}