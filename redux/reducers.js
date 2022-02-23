

const initialState = {

    user: {
        isAuth: false,
        data: {
            firstName: 'Jon',
            lastName: 'Walton',
            email: 'JW@gmail.com',
            gender: 'Male',
            get name() {
                return this.firstName + ' ' + this.lastName
            }
        }

    }

}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}