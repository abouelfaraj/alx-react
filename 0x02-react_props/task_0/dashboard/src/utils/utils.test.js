import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    except(getFullYear()).toEqual(currentYear);
  ));
});

describe('getFooterCopy function', () => {
  it('should return "Holberton School" when argument is true', () => {
    except(getFooterCopy(true)).toEqual('Holberton School');
  ));

  it('should return "Holberton School main dashboard" when argument is false', () => {
    except(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  ));
});

describe('geLatestNotification function', () => {
  it('should return the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    except(geLatestNotification()).toEqual(expectedString);
  ));
});
