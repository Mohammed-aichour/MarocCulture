import { normalizeCityForWeather, isOpenWeatherConfigured, isPixabayConfigured, MOROCCAN_CITIES } from './config';

describe('MarocCulture Cultural & Weather Engine Suite', () => {
  test('normalizeCityForWeather normalizes accents and case', () => {
    expect(normalizeCityForWeather('Fès')).toBe('Fes');
    expect(normalizeCityForWeather('Meknès')).toBe('Meknes');
    expect(normalizeCityForWeather('casablanca')).toBe('Casablanca');
    expect(normalizeCityForWeather('Rabat,MA')).toBe('Rabat');
  });

  test('detects placeholder keys gracefully without throwing', () => {
    expect(typeof isOpenWeatherConfigured()).toBe('boolean');
    expect(typeof isPixabayConfigured()).toBe('boolean');
  });

  test('Moroccan cities list contains historic cultural capitals', () => {
    expect(MOROCCAN_CITIES).toContain('Casablanca');
    expect(MOROCCAN_CITIES).toContain('Marrakech');
    expect(MOROCCAN_CITIES).toContain('Fès');
    expect(MOROCCAN_CITIES).toContain('Tanger');
    expect(MOROCCAN_CITIES).toContain('Chefchaouen');
  });
});
