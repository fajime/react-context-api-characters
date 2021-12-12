import { resta, suma } from './utils';

describe( 'utilidades', () => {
    test('Utilidad Sumar', () => {
        const sumaNumeros = suma(5, 5);
        expect(sumaNumeros).toBe(10);
    })

    test('Utilidad Restar', () => {
        const restaNumeros = resta(5, 2);
        expect(restaNumeros).toBe(3);
    })
} )

