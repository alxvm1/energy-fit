export type PricingPlanCategory = 'student' | 'standard'
export type PricingPlanDuration = '1 месяц' | '1 год'

export interface IPricingPlan {
    id: string
    category: PricingPlanCategory
    duration: string
    price: string
    features: string[]
    highlighted?: boolean
    hasCard?: boolean
    cardImage?: string
    cardPosition?: 'left' | 'right' | 'inside'
}

