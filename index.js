function todos(state = [], action) {
  if (action === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}


function createStore() {
  let state
  let listeners = [];

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }
  return (
    getState,
    subscribe
  )
}

const store = createStore()
store.subscribe(() => {
  console.log('The new state is: ', store.getState())
})

const unsubscribe = store.unsubscribe(() => {
  console.log('The new changed')
})
