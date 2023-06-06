const Car = require('./car')

function foo () {
    return 'the foo'
}

// Test away!
describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBe(3 + 2)
        expect(5).toBeDefined()
        expect(5).toBeGreaterThan(4)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        // expect(o).toBe(oo) // Identical shapes but not same in computer memory
        expect(oo).toBe(ooo) // Pointing to same part of memory
    })
    test('objects', () => {
        expect({ a: 1 }).toEqual({ a: 1 }) // ToBe will not work but toEqual will
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)

    })
})
describe('Car class', () => {

    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })

    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)

    })
    test('has model and make', () => {
        // const prius = new Car('toyota', 'prius')
        expect(prius).toHaveProperty('model', 'prius')
        expect(prius).toHaveProperty('make', 'toyota')
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
        expect(prius.make).toBe('toyota')
        expect(prius.model).toBe('prius')
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius' })
    })
    test('new cars start with the odometer at zero', () => {
        // const prius = new Car('toyota', 'prius')
        expect(prius).toHaveProperty('odometer', 0)

    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)

    })
    test('drive method takes distance and increases odometer by distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    // .todo will prevent false positives by saying that you will update the test soon
    // .only will only test one test and 'skip' the rest
    test('driveAsync method resolves the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(5)
        expect(updatedOdometer).toBe(12)
    })
})