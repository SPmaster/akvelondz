@watch

Feature: Log in/out in to Gmail
  As a mail-box owner 
  I want to login and logout in to the box
  So that I have and haven't access accordingly

  Background:
    Given   I have email with password
    And     I browse my mail-box
    And     I go to password page
    
  Scenario Outline: Enter not valid password
    When    I submit <pass> password
    Then    I see inline error mesasage
    And     I must have no access to my mail-box
     Examples:
      | pass |
      | "empty" |
      | "wrong" |
    
  Scenario: Enter valid password
    When    I submit "valid" password
    Then    I have access to my mail-box

  Scenario: Lock inbox (logout)
    Given   I'm logged in to my mail-box
    When    I sign out
    Then    I see password page for my account
    And     I must have no access to my mail-box
      