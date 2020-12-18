import * as path from 'path';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { OnlineSales } from '../../src/online-sales';

const feature = loadFeature(path.resolve(__dirname, '..' , 'features', 'online-sales.feature'));

defineFeature(feature, (test) => {
  let onlineSales: OnlineSales;
  let salesPrice: number | null;

  beforeEach(() => {
    onlineSales = new OnlineSales();
  });

  test('Selling an <Item> at $<Amount>', ({ given, when, then }) => {
    given(/^I have a\(n\) (.*)$/, (item) => {
      onlineSales.listItem(item);
    });

    when(/^I sell the (.*)$/, (item) => {
      salesPrice = onlineSales.sellItem(item);
    });

    then(/^I should get \$(\d+)$/, (expectedSalesPrice) => {
      expect(salesPrice).toBe(parseInt(expectedSalesPrice, 10));
    });
  });
});