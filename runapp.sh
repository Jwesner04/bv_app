# -------------------------------------------------------------------------- #
# The below bash file attempts to create a custom private network using geth #
#                                                                            #
# © 2022 Jonathan Wesner                                                     #
#                                                                            #
# References:                                                                #
#     https://hackernoon.com/setup-your-own-private-proof-of-authority-      #
#     ethereum-network-with-geth-9a0a3750cda8                                #
# -------------------------------------------------------------------------- #
dos2unix runApp.sh

#################################################################
# prints latest options to user
#################################################################
function printHelp {
    echo
    echo "--------------------------------------------------"
    echo " $SCRIPTERNAME::Help"
    echo "--------------------------------------------------"
    echo "   1) -h|--help    : prints help menu             "
    echo "   2) -d|--deploy  : deploys main py script       "
    echo "   3) -r|--react   : builds & starts react server "
    echo "   4) -u|--update  : uses npm to update pkgs      "
    echo "   5) -t|--test    : test contracts               "
    echo
}

#################################################################
#                             MAIN                              #
#################################################################
SCRIPTERNAME=`basename $0`
BASE_DIR=`pwd`
BASE_CONTRACT_DIR=$BASE_DIR/contracts
BASE_REACT_DIR=$BASE_DIR/ui
CONTRACT_TO_DEPLOY="deploy.py"

for option in "$@"
do
    case $option
    in
    -h|--help)
        printHelp
        exit
        ;;
    -d|--deploy)
    # brownie networks add Ethereum ganache-local host=http://127.0.0.1:7545 chainid=5777
    # brownie networks list
        cd $BASE_CONTRACT_DIR
        brownie run $CONTRACT_TO_DEPLOY --network ganache-local
        cd $BASE_DIR
        exit
        ;;
    -r|--react)
        cd $BASE_REACT_DIR
        npm start
        cd $BASE_DIR
        exit
        ;;
    -u|--update)
        cd $BASE_REACT_DIR
        npm update
        cd $BASE_DIR
        exit
        ;;
    -t|--test)
        cd $BASE_CONTRACT_DIR
        brownie test -s -v
        cd $BASE_DIR
        exit
        ;;
    *)
        echo "------------------------------------"
        echo " $SCRIPTERNAME: Invalid user option "
        echo " $SCRIPTERNAME: See help menu below "
        echo "------------------------------------"
        printHelp
        exit
        ;;
    esac
done