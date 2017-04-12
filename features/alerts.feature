@cleanup
Feature: Gmail email alerts
  As a mail sender 
  I want to be allerted if I miss something
  So that I can make corrections 

  Background:
    Given   I have email with password
    And     I browse my mail-box
    And     I'm logged in to my mail-box
    And     I'm writing a new email
    
  Scenario: Missed subject
    When    I add "recipient" to the email
    And     I send email
    Then    I see "warning" alert 

  Scenario: Missed recipient's email
    When    I send email
    Then    I see "error" alert 
    
  Scenario: Not valid recipient's email
    When    I add "not valid email" to the email
    And     I add "subject" to the email
    And     I send email
    Then    I see "error" alert 
    