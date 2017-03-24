Feature: Log in/out in to Gmail
  As a mail-box owner 
  I want to login and logout in to the box
  So that I have and haven't access accordingly
  
  Background:
    Given   I browse "http://gmail.com/"
    And     I "" see password page for "d006068@gmail.com"

   @watch
    
  Scenario: Enter valid password
    When    I fill in "input#Passwd" field with "oon9ahquohTi4mai"
    And     I click "#signIn"
    Then    I "must" have access to "https://mail.google.com/mail/#inbox"
    And     Account is "d006068@gmail.com"
    
   @watch
    
  Scenario: Lock inbox (logout)
    Given   I "" have access to "https://mail.google.com/mail/#inbox"
    When    I click "=Sign out"
    Then    I "must" see password page for "d006068@gmail.com"
    And     I must have no access to "https://mail.google.com/mail/#inbox"
    
   @watch

  Scenario Outline:: Enter not valid password
    And     I fill in "input#Passwd" field with <pass>
    And     I click "#signIn"
    Then    I see <message>
    And     I must have no access to "https://mail.google.com/mail/#inbox"
     Examples:
      | pass | message |
      | "" | "span*=Введите пароль." |
      | "123asd" | "span*=Неверный пароль. Повторите попытку." |