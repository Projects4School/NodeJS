export async function loadComponent(name: string): Promise<any> {
    const module = await import(name);
    return module.default;
}