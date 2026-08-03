export type Theme = 'light' | 'dark'
export interface Asset { id: string; name: string; type: string; data: string; size: number; createdAt: string }
export interface Skill { id: string; name: string; category: string; level: number; years: number; description: string; color: string; icon?: string }
export interface Project { id: string; name: string; category: string; description: string; stack: string[]; status: 'Live' | 'In progress' | 'Archived'; duration: string; role: string; featured: boolean; pinned: boolean; favorite: boolean; image?: string; problem?: string; solution?: string; architecture?: string; features?: string; challenges?: string; learnings?: string; gallery?: string[]; links?: { github?: string; demo?: string; docs?: string } }
export interface Experience { id: string; company: string; role: string; duration: string; location: string; responsibilities: string; achievements: string; technologies: string[] }
export interface Certification { id: string; name: string; issuer: string; date: string; number: string; verification?: string; assetId?: string }
export interface Message { id: string; name: string; email: string; subject: string; message: string; createdAt: string; read: boolean }
export interface Testimonial { id: string; name: string; company: string; rating: number; review: string; photo?: string }
export interface GalleryAlbum { id: string; name: string; imageIds: string[] }
export interface Profile { name: string; designation: string; tagline: string; summary: string; about: string; email: string; phone: string; address: string; website: string; linkedin: string; github: string; twitter: string; instagram: string; youtube: string; profileImage?: string; coverImage?: string; logo?: string; accent: string }
export interface Settings { theme: Theme; fontSize: 'small' | 'medium' | 'large'; animations: boolean }
export interface PortfolioData { profile: Profile; skills: Skill[]; projects: Project[]; experiences: Experience[]; certifications: Certification[]; testimonials: Testimonial[]; messages: Message[]; assets: Asset[]; albums: GalleryAlbum[]; resumes: string[]; coverLetters: string[]; settings: Settings; activity: string[] }
