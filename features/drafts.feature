Feature: Gmail email drafts
  As a mail-box owner 
  I want an unsent emails to be autosaved as drafts
  So that I can edit them later

  Background:
    Given   I have email with password
    And     I browse my mail-box
    And     I'm logged in to my mail-box
    And     Drafts folder is empty
    And     I'm writing a new email

  Scenario: Unchanged new email will not be saved
    When    I wait for 5 seconds
    And     I close email without sending it
    Then    It will not be saved in Drafts

  Scenario: Undo draft discard
    When    I add "subject" to the email
    And     I discard draft
    Then    I can undo discard
    And     I can open it from Drafts folder
    And     Added data is on its place
    
  Scenario Outline: An email draft with <data> data
    When    I add <data> to the email
    And     I close email without sending it
    Then    I can open it from Drafts folder
    And     Added data is on its place
      Examples:
      | data |
      | "subject" |
      | "recipient" |
      | "Cc" |
      | "img url" |
#      | "Google drive file" |
#      | "local attachment file" |
