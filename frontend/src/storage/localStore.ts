import { seed } from '../data/seed'
import type { PortfolioData } from '../types/portfolio'
const KEY = 'nexus-portfolio-data-v1'
export const loadData = (): PortfolioData => { try { const raw = localStorage.getItem(KEY); return raw ? { ...seed, ...JSON.parse(raw) } : structuredClone(seed) } catch { return structuredClone(seed) } }
export const saveData = (data: PortfolioData) => localStorage.setItem(KEY, JSON.stringify(data))
export const resetData = () => { localStorage.removeItem(KEY); return structuredClone(seed) }
export const exportData = (data: PortfolioData) => new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
export const id = () => crypto.randomUUID()
export const fileToAsset = (file: File) => new Promise<{ name: string; type: string; data: string; size: number }>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve({ name: file.name, type: file.type, data: String(reader.result), size: file.size }); reader.onerror = reject; reader.readAsDataURL(file) })
