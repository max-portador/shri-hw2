import {useState, useCallback, useEffect} from "react"

const storageName = "repoData"

export const useAuth = () => {
    const [repository, setRepository] = useState(null)
    const [buildCommand, setBuildCommand] = useState("npm ci && npm run build")
    const [mainBranch, setMainBranch] = useState("master |")
    const [syncTimeout, setSyncTimeout] = useState(10)

    const login = useCallback( ( _repository,
                                        _buildCommand,
                                        _mainBranch,
                                        _syncTimeout) => {

        setRepository(_repository)
        setBuildCommand(_buildCommand)
        setMainBranch(_mainBranch)
        setSyncTimeout(_syncTimeout)


        localStorage.setItem(storageName, JSON.stringify({
            repository: _repository,
            buildCommand: _buildCommand,
            mainBranch: _mainBranch,
            syncTimeout: _syncTimeout
        }))

    }, [])

    const logout = useCallback( () => {
        setRepository(null)
        setBuildCommand("npm ci && npm run build")
        setMainBranch("master |")
        setSyncTimeout(10)
        localStorage.removeItem(storageName)
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.repository) {
            login(  data.repository,
                    data.buildCommand,
                    data.mainBranch,
                    data.syncTimeout)
        }
    }, [login])

    return {login, logout,
        repository, buildCommand, mainBranch, syncTimeout}

}