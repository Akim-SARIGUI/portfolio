import type { CreateMessagePayload } from '~/types/portfolio'

export function useApi() {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase as string

  const apiFetch = <T>(path: string, options: Parameters<typeof $fetch<T>>[1] = {}) => {
    return $fetch<T>(path, {
      baseURL,
      ...options,
    })
  }

  return {
    getProjects: () => apiFetch('/projects'),
    getExperiences: () => apiFetch('/experiences'),
    getSkills: () => apiFetch('/skills'),
    getProfile: () => apiFetch('/profile'),
    sendMessage: (body: CreateMessagePayload) =>
      apiFetch('/messages', { method: 'POST', body }),
  }
}
