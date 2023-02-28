export type Database =  {
    public: {
        Tables: {
            main_goal: {
                Row: {
                    deadline: string
                    goal_id: number
                    main_goal_completion: boolean
                    main_goal_title: string
                    sphere_id: number
                    time_added: string
                    uuid: string
                }
                Insert: {
                    deadline?: string
                    goal_id?: number
                    main_goal_completion?: boolean
                    main_goal_title: string
                    sphere_id: number
                    time_added?: string
                    uuid?: string
                }
                Update: {
                    deadline?: string
                    goal_id?: number
                    main_goal_completion?: boolean
                    main_goal_title?: string
                    sphere_id?: number
                    time_added?: string
                    uuid?: string
                }
            }
            main_tasks: {
                Row: {
                    deadline: string
                    goal_id: number
                    main_task_id: number
                    main_tasks_completion: boolean
                    main_tasks_title: string
                    time_added: string
                    uuid: string
                }
                Insert: {
                    deadline?: string
                    goal_id: number
                    main_task_id?: number
                    main_tasks_completion?: boolean
                    main_tasks_title: string
                    time_added?: string
                    uuid?: string
                }
                Update: {
                    deadline?: string
                    goal_id?: number
                    main_task_id?: number
                    main_tasks_completion?: boolean
                    main_tasks_title?: string
                    time_added?: string
                    uuid?: string
                }
            }
            sphere: {
                Row: {
                    sphere_id: number
                    sphere_title: string
                    uuid: string
                }
                Insert: {
                    sphere_id?: number
                    sphere_title: string
                    uuid?: string
                }
                Update: {
                    sphere_id?: number
                    sphere_title?: string
                    uuid?: string
                }
            }
            tasks: {
                Row: {
                    main_task_id: number
                    task_completion: boolean
                    task_id: number
                    task_title: string
                    time_added: string
                    uuid: string
                }
                Insert: {
                    main_task_id?: number
                    task_completion?: boolean
                    task_id?: number
                    task_title: string
                    time_added?: string
                    uuid?: string
                }
                Update: {
                    main_task_id?: number
                    task_completion?: boolean
                    task_id?: number
                    task_title?: string
                    time_added?: string
                    uuid?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
