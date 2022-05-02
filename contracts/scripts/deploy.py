# -------------------------------------------------------------------------- #
# The below file is used for creating a demo Blockchain Voting App for a     #
# final ASU project.                                                         #
#                                                                            #
# © 2022 Jonathan Wesner                                                     #
#                                                                            #
# License: SPDX-License-Identifier: MIT                                      #
# -------------------------------------------------------------------------- #
from brownie import ElectionStorage, accounts
from web3 import Web3


def main():
    print("in developement")

    # Web3 setting
    web3 = Web3(Web3.HTTPProvider('http://ethdb:8545'))
    print(web3.isConnected())

    # add these accounts to metamask by importing private key
    owner = accounts[0]
    ElectionStorage.deploy({'from': owner})
