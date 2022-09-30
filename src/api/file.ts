import { path, req } from './http'

async function listDir(pathID: string) {
  const data = await req(path.admin.login)

  return data
}

export { listDir }
