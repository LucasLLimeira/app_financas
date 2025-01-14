import { dashboard, expenses, transactions, trend } from "./icons";


export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dasboard'
    },
    {
        id: 2,
        title: 'Transactions',
        icon: transactions,
        link: '/transactions'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        link: '/expenses'
    },

]