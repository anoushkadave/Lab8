const formatVolumeIconPath = require('../assets/scripts/main');

describe('format volume icon path', () => {
    // tests for "if" (level 3)
    test('is level 3 for highest value', () => {
        expect(formatVolumeIconPath(100)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('is level 3 for middle value', () => {
        expect(formatVolumeIconPath(80)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('is level 3 for lowest value', () => {
        expect(formatVolumeIconPath(67)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    // tests for first "else if" (level 2)
    test('is level 2 for highest value', () => {
        expect(formatVolumeIconPath(66)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is level 2 for middle value', () => {
        expect(formatVolumeIconPath(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is level 2 for lowest value', () => {
        expect(formatVolumeIconPath(34)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    // tests for second "else if" (level 1)
    test('is level 1 for highest value', () => {
        expect(formatVolumeIconPath(33)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is level 1 for middle value', () => {
        expect(formatVolumeIconPath(15)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is level 1 for lowest value', () => {
        expect(formatVolumeIconPath(1)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    // tests for "else" (level 0)
    test('is level 0 for only possible value', () => {
        expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
});