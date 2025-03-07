export interface DietPlan {
    id?: string,
    name: string,
    meals_list: Meal[]

}

export interface Meal {
    id?: number,
    name: string,
    description: string,
    items: MealItem[]
}

export interface MealItem {
    id?: number,
    meal?: number,
    name: string,
    qtd: string
}