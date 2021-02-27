describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(($el) => {
        expect($el).to.have.value(75);
      });
  });

  it('Volume input changes when slider value changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-number')
      .then(($el) => {
        expect($el).to.have.value(33);
      });
  });

  it('Volume of audio changes when slider value changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound')
      .then(($el) => {
        expect($el).to.have.prop('volume', 0.33);
      });
  });

  // Test if the image and sound sources change when you select the party horn radio button
  it('Image and sound sources change when selecting the party horn radio button', () => {
    cy.get('#radio-party-horn').invoke('attr', 'checked', true).trigger('change')
    cy.get('#sound-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
      });
    cy.get('#horn-sound')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
      });
  });

  // Test if the volume image changes when increasing volumes (you must test for all 3 cases)
  it('Volume image changes when increasing volumes', () => {
    // change volume with number
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
      });

    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
      });

    cy.get('#volume-number').clear().type('25');
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
      });

    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
      });

    // change volume with slider
    cy.get('#volume-slider').invoke('val', 75).trigger('input')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
      });

    cy.get('#volume-slider').invoke('val', 50).trigger('input')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
      });

    cy.get('#volume-slider').invoke('val', 25).trigger('input')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
      });

    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
      });
  });

  // Test if the honk button is disabled when the textbox input is a empty or a non-number
  it('Honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn')
      .then(($el) => {
        expect($el).to.have.attr('disabled');
      });

    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn')
      .then(($el) => {
        expect($el).to.have.attr('disabled');
      });
  });

  // Test if an error is shown when you type a number outside of the given range for the volume textbox input
  it('Error is shown when number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('input:invalid')
      .then(($el) => {
        expect($el).to.have.attr('id', 'volume-number');
      });
    
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid')
      .then(($el) => {
        expect($el).to.have.attr('id', 'volume-number');
      });
  });
});
