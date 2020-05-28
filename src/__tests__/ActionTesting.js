import * as actions from '../actions/markersActions'

describe('Testing Action', () => {
  it('should dispatch an action to Change markers with the given object', () => {
    const payload = { lat: 41.4469883,lng: 2.2450325 };
    const expectedAction = {
      type: 'ADD_MARKER',
      payload
    }
    expect(actions.addMarker(payload)).toEqual(expectedAction)
  })
})