#!/usr/bin/python3

# -------------------------------------------------------------------------- #
# The below code is a test script for a Voter Registration contract.         #
#                                                                            #
# © 2022 Jonathan Wesner                                                     #
#                                                                            #
# -------------------------------------------------------------------------- #
import time
import json
from brownie import VoterRegistrar, accounts
from datetime import datetime

class RegisteredVoters:

    """ Constructor: Takes a voterRegistrar contract instance """
    def __init__(self, voterRegistrarInstance):
        self.voterRegistrarInstance_ = voterRegistrarInstance

    """ inserts a voter by using voterRegistrar instance """
    def insertVoter(self, firstname, lastname, usCitizen, ageYear, addrState, 
                    addrZipcode, driverLic, ssn) -> str:

        if(self.voterRegistrarInstance_.createNewVoter(firstname, lastname, usCitizen,
            ageYear, addrState, addrZipcode, driverLic, ssn)):
            return ""
        else:
            return "Alert: Voter Already Exists"

    """ inserts a voter by using voterRegistrar instance """
    def voterIsValid(self, ssn) -> str:

        if(self.voterRegistrarInstance_.isVoterBySsn(ssn)):
            voter = self.voterRegistrarInstance_.getRegisteredVoterBySsn(ssn)

            return "Voter is valid"

            # TODO: Check specific voter info based on state/city
        else:
            return "Alert: Voter is not registered"

    """ used to insert list of pre-defined registered voters.
        Expects a path, including the file name to a JSON file"""
    def voterInjector(self, jsonTestFile):
        # Opening JSON file using relative path
        jsonFile = open(jsonTestFile, "r")
        
        # returns JSON object as
        # a dictionary
        data = json.load(jsonFile)

        # Iterating through the json
        # list
        for person in data['persons']:

            # use class method to add to current voter registrar instance
            self.insertVoter(person['firstname'],
                             person['lastname'],
                             person['us_citizen'],
                             person['age_year'],
                             person['address_state'],
                             person['address_zipcode'],
                             person['driver_license'],
                             person['ssn'])


# reference: https://github.com/christianb93/nft-bootcamp
def voterRegistrar():
    return accounts[0].deploy(VoterRegistrar)
    
def main():
    registeredVotersInstance_ = RegisteredVoters(voterRegistrar())
    
    # inject voters for demo
    registeredVotersInstance_.voterInjector("./data/registeredVoters.json")
    
    # check one of the injected voters
    if registeredVotersInstance_.voterIsValid(262153012) == "Voter is valid":
        print("Voter valid")

    return
