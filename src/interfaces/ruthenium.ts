export interface RutheniumFileInterface {
    name: string | null
    version: string | null
    description: string | null
    author: string | null
    packages: { package: string, repository: string, after: string | null }[]
    environment: boolean | null
}
